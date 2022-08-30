<template>
	<div>
		<h1>Admin Dashboard</h1>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in Users" :key="user.key">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import db from '../firestoreInit';
export default {
	name: 'Dash-board',
	data() {
		return {
			Users: [],
		};
	},
	created() {
		db.collection('users').onSnapshot((snapshotChange) => {
			this.Users = [];
			snapshotChange.forEach((doc) => {
				this.Users.push({
					name: doc.data().name,
					email: doc.data().email,
				});
			});
		});
	},
};
</script>

<style lang="scss" scoped>
table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}

tr:nth-child(even) {
	background-color: #dddddd;
}
</style>

<!-- db.collection('users').getDocs({ name: this.name, email: this.email, }) .then((this.email = ''), (this.name = '')); -->
