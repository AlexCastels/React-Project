import { FormUsersSignup } from "./FormUsersSignup";
import { HelloWorld } from "./components/HelloWorld";
import { Link, Route , Routes } from 'react-router-dom'

export function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HelloWorld/>}/>
				<Route path="/formusers" element={<FormUsersSignup/>}/>
			</Routes>
		</>
	)
}