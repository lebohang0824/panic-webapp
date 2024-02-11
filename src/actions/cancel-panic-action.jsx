import { redirect } from 'react-router-dom';
import { cancelPanic } from '../services/panicService';

const cancelPanicAction = async ({ request }) => {
    const formData = await request.formData();

    const panic_id = formData.get('panic_id');

    if (!panic_id) {
        // Throw error here

        return redirect('/');
    }

    await cancelPanic(panic_id);

    return redirect('/history');
};

export default cancelPanicAction;
