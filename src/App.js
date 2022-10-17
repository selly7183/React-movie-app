import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/movie/:id",
		element: <Detail />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
