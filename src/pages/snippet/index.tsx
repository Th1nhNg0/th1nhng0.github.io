import moment from "moment";
import { allSnippets, Snippet } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import ListLayout2 from "src/layouts/ListLayout2";

export default function BlogPage({ snippets }: { snippets: Snippet[] }) {
  return <ListLayout2 snippets={snippets} />;
}

export async function getStaticProps() {
  const snippets = allSnippets
    .map((snippet) =>
      pick(snippet, ["slug", "title", "date", "logo", "description"])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return { props: { snippets } };
}
