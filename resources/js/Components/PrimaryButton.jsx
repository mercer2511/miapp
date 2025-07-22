export default function PrimaryButton({
                                          className = '',
                                          disabled,
                                          children,
                                          ...props
                                      }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent
                bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900
                focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                px-4 py-2 text-xs font-semibold uppercase tracking-widest
                dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:active:bg-indigo-800 dark:text-white
                ${disabled ? 'opacity-25' : ''} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
