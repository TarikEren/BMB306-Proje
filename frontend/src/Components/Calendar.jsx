import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

/**
 * Yapılacaklar: 
 *      -Dışarıdan event çekme
 *      -Dışarıya event listesini verme (Client-side hafızada tutuyor backende at)
 *      -Bir takvim gününe tıklayıp o günün eventlerini görme
 *      
 */

function Calendar() {
  return (
    <FullCalendar
    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    headerToolbar={
        {
            start: "prev,next",
            center:"title",
            end: "today timeGridDay dayGridWeek dayGridMonth"
        }
    }
    buttonText={ //Sadece düğme üzerindeki yazıları değiştiriyor
        {
            today: "Today",
            day: "Day",
            week: "Week",
            month: "Month"
        }
    }
    editable={true}   //Bu ve altındaki üç satır değişebilir.
    droppable={true}
    selectable={true}
    events={ 
        [
            {
                //Örnek event
                id: 1,
                title: "Örnek Event",
                start: "2024-03-24",
                end: "2024-03-25",
                //Tüm gün yerine saatlik istiyorsan üsttekileri iptal et,
                //alttakileri aç.
                // start: "2024-03-24T10:00:00",
                // end: "2024-03-24T16:00:00",
                backgroundColor: "green", //Hexadecimal değer alabilirler.
                borderColor: "green",
                textColor: "white"
            }
        ]
    }
    />
  );
}

export default Calendar;