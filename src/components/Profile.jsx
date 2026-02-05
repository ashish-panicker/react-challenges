import './profile.css'

const Profile = ({ user}) => {
	return (
		<div className='profile-card'>
			<img src='https://i.pravatar.cc/150?img=12' className='profile-img' />

			<h2 className='profile-name'>{user.name}</h2>
			<p className='profile-role'>{user.role}</p>

			<div className='divider'></div>

			<p className='profile-bio'>{user.bio}</p>

			<div className='divider'></div>

			<div className='skills'>
				{user.skills.map((skill) => (
					<span className={`tag tag-${skill}`} key={skill}>
						{skill}
					</span>
				))}
			</div>

			<div className='divider'></div>

			<div className='contact'>
				<p>{user.email}</p>
				<p>{user.city}</p>
			</div>
		</div>
	)
}

export default Profile
