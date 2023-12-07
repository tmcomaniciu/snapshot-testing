import renderer from "react-test-renderer";
import Tudor from "./GitHubCard";

test("renders a snapshot", () => {
  const tree = renderer.create(<Tudor />).toJSON();
  expect(tree).toMatchSnapshot();
});
