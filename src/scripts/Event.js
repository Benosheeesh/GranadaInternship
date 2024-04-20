document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.querySelector('.event-form');
    const eventNameInput = document.getElementById('eventName');
    const eventDateTimeInput = document.getElementById('eventDateTime');
    const eventLocationInput = document.getElementById('eventLocation');
    const eventDescriptionInput = document.getElementById('eventDescription');
    const addEventBtn = document.getElementById('addEventBtn');
    const eventList = document.getElementById('eventList');

    addEventBtn.addEventListener('click', function() {
        const eventName = eventNameInput.value.trim();
        const eventDateTime = eventDateTimeInput.value.trim();
        const eventLocation = eventLocationInput.value.trim();
        const eventDescription = eventDescriptionInput.value.trim();

        if (eventName && eventDateTime) {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');
            eventItem.innerHTML = `
                <h2>${eventName}</h2>
                <p>Date and Time: ${eventDateTime}</p>
                ${eventLocation ? `<p>Location: ${eventLocation}</p>` : ''}
                ${eventDescription ? `<p>Description: ${eventDescription}</p>` : ''}
            `;
            eventList.appendChild(eventItem);

            // Clear form inputs after adding event
            eventForm.reset();
        } else {
            alert('Please fill out all required fields (Event Name, Date and Time)');
        }
    });
});
