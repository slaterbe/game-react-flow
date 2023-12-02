export const TaskLog = ({ close, tasks }) => (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75" onClick={close}>
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-500 p-8 rounded shadow-lg w-1/2 h-[800px]" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Tasks</h2>
                    <button id="closeModalButton" className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                {tasks.map((task, index) => (
                    <div key={index} className={`${task.claimed ? 'line-through' : ''}`}>
                        {task.title}
                    </div>
                ))}
            </div>
        </div>
    </div>
)