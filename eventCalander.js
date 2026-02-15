document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
                  events: [
            {
                title: 'All day event',
                start: '2026-10-20'
            }
        ]
        });
        calendar.render();
      });
