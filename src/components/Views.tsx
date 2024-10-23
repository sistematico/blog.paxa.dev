// const fetchUser = async () =>
//  {
//   const response = await fetch("/api/views?" + new URLSearchParams({ slug }));
//   return await response.json();
// }

// export function Views(props) {
//   const views = fetchUser();

//   return (
//     <div>{JSON.stringify(views)}</div>
//   );
// }

import { createSignal, createResource, Switch, Match, Show } from "solid-js";


export default function Views(props: { slug: string }) {
  const { slug } = props;
  
  const [views] = createResource(() =>
    fetch("/api/views?" + new URLSearchParams({ slug }))
      .then((result) => result.json())
      .then((data) => data.name)
  );

// const fetchUser = async (slug: string) =>
//  {
//   // const response = await fetch("/api/views?" + new URLSearchParams({ slug }));
//   return await response.json();
// }

  return (<div>{views()}</div>);
}


