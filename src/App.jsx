import Profile from './components/Profile'

const profile = {
	name: 'John Smith',
	email: 'john.smith@gmail.com',
	role: 'Frontend Developer',
	skills: ['react', 'css', 'javascript', 'figma'],
	email: 'john@email.com',
	city: 'New York'
}

function App() {
	return (
		<>
		<Profile 
			user={profile} text={""} />
		</>

		// props = {user: {}, text: ""}
		// const {user} = props
	)
}

export default App
