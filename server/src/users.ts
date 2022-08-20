export interface User {
	id: string;
	name: string;
	room: string;
}

const users: User[] = [];

const addUser = ({ id, name, room }: User) => {
    name = name.trim();
    room = room.trim();

	const existingUser = users.find(
		(user) => user.room === room && user.name === name
	);

	if (existingUser) {
		return {
			error: "Username is taken"
		};
	}

	const user = {
		id,
		name,
		room
	};

	users.push(user);
	return { user };
};

const removeUser = (id: string): User | undefined => {
	const index = users.findIndex(
		(user) => user.id === id
	);

	if (index !== -1) {
        return users.splice(index, 1)[0];
	}
};

const getUser = (id: string): User =>
	users.find((user) => user.id === id)!;

const getUsers = (): User[] => users;

const getUsersInRoom = (room: string): User[] =>
	users.filter((user) => user.room === room);

export { addUser, removeUser, getUser, getUsers, getUsersInRoom };
