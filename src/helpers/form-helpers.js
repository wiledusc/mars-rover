import { toast } from 'react-toastify';

export function checkInitialPositionInputs(event) {
    if (!/[0-9 0-9 NSEWnsew]/.test(event.key)) {
        return event.preventDefault();
    }
}

export function checkPlateauInputs(event) {
    if (!/[0-9]/.test(event.key)) {
        return event.preventDefault();
    }
}

export function checkCommandsInputs(event) {
    if (!/[LRMlrm]/.test(event.key)) {
        return event.preventDefault();
    }
}

export function showErrorMessage(message) {
    toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
}