// https://codesandbox.io/s/fancy-microservice-qnu7f

import React from "react";
import "./styles.css";

export default function App() {
  const scrollContainer = React.useRef();
  const scrollContent = React.useRef();
  const scrollToTop = () => {
    scrollContainer.current.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToBottom = () => {
    scrollContainer.current.scrollTo({
      top:
        scrollContent.current.clientHeight -
        scrollContainer.current.clientHeight,
      behavior: "smooth"
    });
  };
  const scrollUp = () => {
    scrollContainer.current.scrollBy({
      top: -scrollContainer.current.clientHeight,
      behavior: "smooth"
    });
  };
  const scrollDown = () => {
    scrollContainer.current.scrollBy({
      top: scrollContainer.current.clientHeight,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div
        ref={scrollContainer}
        style={{
          width: "200px",
          height: "200px",
          overflowY: "scroll",
          resize: "both"
        }}
      >
        <div ref={scrollContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          et lacus a ornare. Nam eget aliquam felis. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Maecenas porta ut est nec euismod. Cras et ante eu massa posuere
          posuere a faucibus ex. Ut finibus posuere pulvinar. Duis euismod
          auctor turpis, sit amet vestibulum lacus commodo id. Suspendisse
          ullamcorper porta scelerisque. Phasellus id odio in metus pulvinar
          lobortis. Nullam quis massa at nisi eleifend congue. Curabitur orci
          tellus, elementum ac porta in, volutpat auctor turpis. Quisque lacus
          nulla, dignissim eu nisi vitae, malesuada sagittis ante. Ut et ligula
          nec leo tempor pellentesque id et urna. Suspendisse quis facilisis
          ligula. Duis dolor sem, suscipit eu interdum non, congue eget sem. In
          in mauris augue. Aenean finibus, eros convallis fringilla pharetra,
          velit velit aliquet ipsum, id viverra enim nulla in odio. Maecenas ac
          dui eleifend, mattis tortor vel, lobortis enim. Nunc dapibus feugiat
          turpis, quis imperdiet nibh pharetra id. Donec vestibulum dignissim
          tortor id volutpat. Nunc eget lacinia justo, dapibus posuere enim.
          Aenean sed efficitur mauris. Morbi egestas, nunc at porttitor
          porttitor, erat dui pulvinar ex, nec elementum magna metus ac tellus.
          Ut auctor facilisis aliquet. Vestibulum ultrices nulla nisl. Nullam
          nulla elit, condimentum vel tellus et, gravida semper erat. Nam vel
          porta justo. In sed consequat tortor. Proin efficitur quis felis at
          gravida. Morbi malesuada maximus eros ut iaculis. Aenean euismod, mi
          ac iaculis placerat, ex orci faucibus massa, eu vestibulum erat odio
          et nisi. Phasellus eu ligula a nisi tempus tincidunt at ac sem. Nunc
          sodales placerat egestas. Aenean dictum finibus nisi quis vulputate.
          Nullam sodales libero et condimentum vehicula. Maecenas lacinia odio
          sed commodo cursus. Cras posuere nisi quis ante sodales tempus.
          Aliquam a elit eget erat interdum ornare. Sed ac lobortis urna. Nullam
          sed diam a erat iaculis placerat nec et magna. Etiam ullamcorper metus
          id quam faucibus, a semper libero semper. Integer iaculis varius elit.
          Cras suscipit, leo fringilla ullamcorper sodales, nunc ex dignissim
          quam, a tincidunt neque risus sit amet neque. Suspendisse lobortis
          accumsan ullamcorper. Aliquam erat volutpat. Cras sit amet magna ac
          leo vehicula congue. Nullam aliquet dolor id arcu malesuada, vel
          dictum ipsum sollicitudin. In vitae rutrum lacus. Sed efficitur
          volutpat lacinia. Nam eget elementum erat, quis dictum lacus.
          Suspendisse ullamcorper, neque et hendrerit maximus, diam libero
          fringilla mi, sit amet egestas sapien orci vel leo. Donec semper, nisi
          ut viverra lacinia, augue tortor egestas erat, vel euismod enim nisi
          sit amet leo. Nulla magna orci, vulputate at orci non, fermentum
          iaculis tellus. Mauris venenatis, nunc euismod bibendum consectetur,
          turpis augue interdum ex, ac condimentum metus lectus vitae justo. Ut
          auctor sollicitudin elit et posuere. Sed non turpis cursus, pharetra
          lectus ut, tincidunt mauris. In eu mi dapibus tortor convallis
          imperdiet at et orci.
        </div>
      </div>
      <button onClick={scrollToTop}>top</button>
      <button onClick={scrollToBottom}>bottom</button>
      <button onClick={scrollUp}>up</button>
      <button onClick={scrollDown}>down</button>
    </>
  );
}
