import {
  useQueryClient,
  useQuery,
  QueryClientProvider,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonView personId="1" />
    </QueryClientProvider>
  );
}

type Person = {
  id: string;
  name: string;
  age: number;
};

// type PersonViewProps = { personId: string };
// function PersonView({ personId }: PersonViewProps) {
function PersonView({ personId }: { personId: string }) {
  const queryClient = useQueryClient();
  const personQuery = useQuery({
    queryKey: ["person", { personId }],
    async queryFn() {
      const response = await fetch(`/person/${personId}`);
      const data = (await response.json()) as Person;
      return data;
    },
  });
  const updateUserMutation = useMutation({
    async mutationFn(person: Partial<Person>) {
      const response = await fetch(`/person/${personId}`, {
        method: "UPDATE",
        body: JSON.stringify(person),
      });
      const data = (await response.json()) as Person;
      return data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["person", { personId }] });
    },
  });
  return (
    <div>
      <pre>{JSON.stringify(personQuery.data)}</pre>
      <button
        disabled={updateUserMutation.isLoading}
        onClick={() => {
          updateUserMutation.mutate({
            id: personId,
            name: "Pluto",
          });
        }}
      />
    </div>
  );
}

// CONSIGLIO
// separare le query e mutation in un file apposito
// cosi è più facile tenere traccia delle queryKey

// ad esempio nel file data.ts

export function usePersonQuery({ personId }: { personId: string }) {
  return useQuery({
    queryKey: ["person", { personId }],
    async queryFn() {
      const response = await fetch(`/person/${personId}`);
      const data = (await response.json()) as Person;
      return data;
    },
  });
}

export function useUpdatePersonMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    async mutationFn(person: Partial<Person>) {
      const response = await fetch(`/person/${person.id}`, {
        method: "UPDATE",
        body: JSON.stringify(person),
      });
      const data = (await response.json()) as Person;
      return data;
    },
    onSuccess(data, variables) {
      queryClient.invalidateQueries({
        queryKey: ["person", { personId: variables.id }],
      });
    },
  });
}

// file app.tsx

function PersonApp({ personId }: { personId: string }) {
  const personQuery = usePersonQuery({ personId });
  const updateUserMutation = useUpdatePersonMutation();
  return (
    <div>
      <pre>{JSON.stringify(personQuery.data)}</pre>
      <button
        disabled={updateUserMutation.isLoading}
        onClick={() => {
          updateUserMutation.mutate({
            id: personId,
            name: "Pluto",
          });
        }}
      />
    </div>
  );
}
