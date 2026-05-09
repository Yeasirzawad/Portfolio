export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({
      success: false,
      message: 'Method not allowed.'
    });
  }

  const { name, email, phone, message } = request.body || {};

  if (!name || !email || !message) {
    return response.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return response.status(500).json({
      success: false,
      message: 'Contact form is not configured yet.'
    });
  }

  try {
    const formResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio Contact from ${name}`,
        from_name: name,
        email,
        phone: phone || 'Not provided',
        message,
        to_email: 'amirsifat@gmail.com'
      })
    });

    const result = await formResponse.json().catch(() => null);

    if (!formResponse.ok || !result?.success) {
      return response.status(502).json({
        success: false,
        message: result?.message || 'Message could not be sent.'
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Message sent successfully.'
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return response.status(500).json({
      success: false,
      message: 'Message could not be sent.'
    });
  }
}
