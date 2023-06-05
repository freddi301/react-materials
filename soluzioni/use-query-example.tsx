type Person = {
    id: string;
    name: string;
    age: number;
  };
  
  function PersonView({ personId }: { personId: string }) {
    const queryClient = useQueryClient();
    const userQuery = useQuery({
      queryKey: ["user", { personId }],
      async queryFn() {
        const response = await fetch(`/person/${personId}`);
        const data = (await response.json()) as Person;
        return data;
      }
    });
    const updateUserMutation = useMutation({
      async mutationFn(person: Partial<Person>) {
        const response = await fetch(`/person/${personId}`, {
          method: "UPDATE",
          body: JSON.stringify(person)
        });
        const data = (await response.json()) as Person;
        return data;
      },
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["user", { personId }] });
      }
    });
    return (
      <div>
        <pre> {JSON.stringify(userQuery.data)}</pre>
        <button
          disabled={updateUserMutation.isLoading}
          onClick={() => {
            updateUserMutation.mutate({
              id: personId,
              name: "Pluto"
            });
          }}
        />
      </div>
    );
  }