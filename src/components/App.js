import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useMedia } from '../hooks/useMedia';
import DialogEvent from './DialogEvent';

function App() {
  const isDesktop = useMedia();
  const [dialogEventData, setDialogEventData] = useState({
    selection: null,
    show: false
  });

  function handleDateSelect(selection) {
    setDialogEventData({
      selection,
      show: true
    });
  }

  function handleEventClick(selection) {
    if (window.confirm(`Voulez-vous supprimer le temps "${selection.event.title}" ?`)) {
      selection.event.remove();
    }
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <i>{eventInfo.timeText}</i>
        <b style={{ marginLeft: 5 }}>{eventInfo.event.title}</b>
      </>
    )
  }

  function saveEvents(events) {
    localStorage.setItem('events', JSON.stringify(events));
  }

  return (
    <>
      {dialogEventData.show && <DialogEvent dialogEventData={dialogEventData} setDialogEventData={setDialogEventData} />}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        locale={'fr'}
        initialView={isDesktop ? 'timeGridWeek' : 'timeGridDay'}
        initialEvents={JSON.parse(localStorage.getItem('events')) || []}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        selectable={true}
        editable={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        eventsSet={saveEvents}
        longPressDelay={250}
        slotDuration={{ minutes: 15 }}
        slotLabelInterval={{ hours: 1 }}
        scrollTime={{ hours: 8 }}
      />
    </>
  );
}

export default App;
