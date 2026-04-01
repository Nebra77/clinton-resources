const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {

          initialView: 'dayGridMonth',
                  events: [
            {
                title: 'Intro to Drawing: Human Head and Facial Features',
                start: '2026-04-20T14:00:00',
                end: '2026-04-20T17:00:00',
            },
            {
              title: 'Cruising Clinton',
            },
            {
              title:"Taiji (Tai Chi) Qigong Classes for Health and Longevity with Instructor, David Grantham",
              daysOfWeek: [2],
              startRecur: "2026-04-07",
            },
        ],
        contentHeight:900,
        eventBackgroundColor: '#063970',
        eventDisplay: 'block',
        displayEventTime: false,
        });
        calendar.render();
      });
