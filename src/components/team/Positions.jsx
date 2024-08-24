import React from 'react'
import Button from '../Button';
function Positions() {
  return (
<div style={styles.container}>
      <h4 style={styles.availablePosition}>AVAILABLE POSITION</h4>
      <h2 style={styles.title}>Join Our Team to Help Couples Plan Their Dream Wedding!</h2>
      <form style={styles.form}>
        <div style={styles.nameRow}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Full Name</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Last Name</label>
            <input type="text" style={styles.input} />
          </div>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input type="email" style={styles.input} />
        </div>
        <div style={styles.inputContainer}>
          <label style={{ ...styles.label, marginRight: '1rem' }}>Position</label>
          <select style={styles.input}>
            <option value="">Select a position</option>
            <option value="Wedding Planner">Wedding Planner</option>
            <option value="Event Coordinator">Event Coordinator</option>
            <option value="Marketing Specialist">Marketing Specialist</option>
            <option value="Graphic Designer">Graphic Designer</option>
          </select>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.labelWithIcon}>
            Drop your resume here or 
            <span style={styles.svgIcon} onClick={() => document.getElementById('fileInput').click()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0004 17V9.00003C14.0004 7.89403 13.1064 6.99603 12.0004 6.99203V6.99203C10.8884 6.98703 9.9834 7.88803 9.9834 9.00003V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 8V17.05" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 8V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 17V17.5C14 19.433 12.433 21 10.5 21V21C8.567 21 7 19.433 7 17.5V17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 8V8C17 5.239 14.761 3 12 3V3C9.239 3 7 5.239 7 8V8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </label>
          <input id="fileInput" type="file" style={styles.hiddenFileInput} />
        </div>
        <div className="btn">
        <Button text="Submit" href="" />
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#21272E',
    color: '#FFFFFF',
    padding: '40px',
    borderRadius: '8px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '"Playfair Display"',
  },
  availablePosition: {
    color: '#E2725B',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: '"Playfair Display"',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '140%', // 67.2px
    letterSpacing: '0.24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  nameRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: '20px',
    flex: '1',
    marginLeft: '10px',
    marginRight: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    textAlign: 'left',
  },
  labelWithIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px',
    fontSize: '16px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderBottom: '2px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#21272E',
    color: '#FFF',
    fontFamily: '"Playfair Display"',
  },
  svgIcon: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  hiddenFileInput: {
    display: 'none',
  },
 
};




export default Positions