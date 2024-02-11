import { redirect } from 'react-router-dom';
import { sendPanic } from '../services/panicService';

const sendPanicAction = async ({ request }) => {
    const formData = await request.formData();

    const longitude = formData.get('longitude');
    const latitude = formData.get('latitude');
    const panic_type = formData.get('panic_type');
    const details = formData.get('details');

    if (!longitude || !latitude || !panic_type || !details) {
        // Throw error here
        return redirect('/');
    }

    await sendPanic(longitude, latitude, panic_type, details);

    return redirect('/history');
};

export default sendPanicAction;
