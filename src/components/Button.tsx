export interface ButtonProps {
    content: string,
    onClick: () => void
}

export const DesktopButton = ({ content, onClick }: ButtonProps) => (<div>
    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg md:px-8 md:py-2 lg:px-8 lg:py-3 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2 text-2xl content"
        onClick={onClick}>
        {content}
    </button>
</div>);

export const MobileButton = ({ content, onClick }: ButtonProps) => (<div>
    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-8 py-1 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2 text-lg content"
        onClick={onClick}>
        {content}
    </button>
</div>);