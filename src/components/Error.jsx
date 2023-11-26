import { useState } from "react"


export const Error = () => {
    const [error, setError] = useState('false');

    return (
        <div className={!error ? "error-block": "error-block active"}>
            <div className="error-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8365 32 32 24.8367 32 16C32 7.16333 24.8365 0 16 0C7.16345 0 0 7.16333 0 16C0 24.8367 7.16345 32 16 32ZM14.3657 19.7454H18.1575L18.7546 5.92603H13.7686L14.3657 19.7454ZM14.3657 22.3704C13.875 22.8057 13.6296 23.3657 13.6296 24.051C13.6296 24.7363 13.875 25.301 14.3657 25.7454C14.6333 25.9783 14.9353 26.1489 15.2717 26.2573C15.5641 26.3513 15.8824 26.3982 16.2268 26.3982C16.9677 26.3982 17.5834 26.1807 18.0741 25.7454C18.5741 25.301 18.8241 24.7363 18.8241 24.051C18.8241 23.3657 18.5741 22.8057 18.0741 22.3704C17.5834 21.926 16.9677 21.7039 16.2268 21.7039C15.4861 21.7039 14.8657 21.926 14.3657 22.3704Z" fill="white" fill-opacity="0.73"/>
                </svg>
            </div>
            <p className="error-text">Что-то пошло не так</p>
            <div className="error-footer">
                <button className="btn error-btn" onClick={() => setError(false)}>Понятно</button>
            </div>
        </div>
    )
}