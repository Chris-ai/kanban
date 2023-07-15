export interface Board {
	name: string,
	columns: Column[]
}

export interface Column {
	name: string
	tasks: Task[]
}

export interface Task {
	title: string,
	description: string,
	subtasks: Subtask[]
	status: string[]
	// priority: 'high' | 'medium' | 'low',
}

export interface Subtask {
	title: string,
	isCompleted: boolean
}