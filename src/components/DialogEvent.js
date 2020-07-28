import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const primary = '#2c3e50';

const Dialog = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 99999;
  overflow: hidden;
`

const DialogBody = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`

const DialogHead = styled.div`
  background: ${primary};
  color: white;
  padding: 10px 20px;
  display: flex;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const DialogClose = styled.div`
  cursor: pointer;
  background: #333;
  width: 20px;
  height: 20px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const DialogContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  input {
    margin-left: 8px;
    padding: 5px 10px;
    font-size: 16px;
  }
`

const DialogButtons = styled.div`
  display: flex;
  padding: 20px 0 0;
`

const DialogButton = styled.button`
  background: ${props => props.isOk ? primary : '#dedede'};
  color: ${props => props.isOk ? 'white' : '#333'};
  border-radius: 4px;
  padding: 5px 10px;
  border: 0;
  cursor: pointer;
`

const Divider = styled.div`
  width: 10px;
`

function DialogEvent({ dialogEventData, setDialogEventData, portal = '#dialog' }) {
  const [title, setTitle] = useState('');

  function hide() {
    setDialogEventData({
      selection: null,
      show: false
    });
  }

  function addEvent() {
    const selection = dialogEventData.selection;
    const calendarApi = selection.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Math.random(),
        title,
        start: selection.startStr,
        end: selection.endStr,
        allDay: selection.allDay
      });

      hide();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter') {
      addEvent();
    }
  }

  useEffect(() => {
    document.querySelector('input').focus();
  }, []);

  return ReactDOM.createPortal(
    <Dialog>
      <DialogBody>
        <DialogHead>
          Ajouter un nouveau temps passé
          <DialogClose onClick={hide}>✘</DialogClose>
        </DialogHead>
        <DialogContent>
          <label>
            Titre :
            <input type="text" value={title} onKeyPress={handleKeydown} onChange={e => setTitle(e.target.value)} />
          </label>
          <DialogButtons>
            <DialogButton onClick={hide}>Annuler</DialogButton>
            <Divider />
            <DialogButton isOk onClick={addEvent}>Ok</DialogButton>
          </DialogButtons>
        </DialogContent>
      </DialogBody>
    </Dialog>,
    document.querySelector(portal)
  );
}

export default DialogEvent;