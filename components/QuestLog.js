export const QuestLog = ({ close }) => (
    <div class="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75" onClick={close}>
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white p-8 rounded shadow-lg w-1/2 h-96" onClick={(e) => e.stopPropagation()}>
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Modal Title</h2>
                    <button id="closeModalButton" class="text-gray-600 hover:text-gray-800">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={close}>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p>Modal content goes here...</p>
            </div>
        </div>
    </div>
)