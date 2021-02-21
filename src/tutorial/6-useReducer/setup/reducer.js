export const reducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const newPeople = [...state.people, action.payload]
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'item added',
		}
	} else if (action.type === 'NO_VALUE') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'no value',
		}
	} else if (action.type === 'CLOSE_MODAL') {
		return {
			...state,
			isModalOpen: false
		}
	} else if (action.type === 'REMOVE_ITEM') {
		const newPeople = state.people.filter((person) => person.id !== action.payload)
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'removed',
		}
	}
	throw new Error('no matching action type')
}