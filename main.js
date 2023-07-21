document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Get form data
      const message = document.getElementById('message').value;

      // Send API request with form data
      await sendWebhook( message);

      // Clear form fields
      document.getElementById('message').value = '';

      // Show success message
      responseDiv.className = 'success';
      responseDiv.textContent = 'Feedback submitted successfully!';

      // Hide success message after 3 seconds
      setTimeout(() => {
          responseDiv.textContent = '';
      }, 3000);
  });

  async function sendWebhook(message) {
      // Replace this with your actual API endpoint and payload
      var webhookUrl = 'https://discord.com/api/webhooks/1099610271741394944/IPuQ5a6eKmN9ns_DlFlXUzU828GLuRYq5olr1eWEjlt7lDj25T-y1xTLO3Di8bPxtpoN';
      const payload = {
          username: "feedback generator",
          embeds: [{
              title: '',
              color: 3447333, // Blue color
              fields: [{
                  name: 'Message: '+ message ,
                  value: ''

              }]
          }]
      };

      // Make API request using Fetch API
      const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
      });

      // Check for success response
      if (response.ok) {
          console.log('sent successfully:', payload);
      } else {
          console.error('Failed to send message:', payload);
      }
  }
});
