type StatusSelectorProps = {
  status: 'Want to make' | 'Made'
  onChange: (status: 'Want to make' | 'Made') => void
}

const StatusSelector = ({ status, onChange }: StatusSelectorProps) => {
  return (
    <div className="status-selector">
      <button
        type="button"
        className={status === 'Want to make' ? 'active' : ''}
        onClick={() => onChange('Want to make')}
      >
        Want to make
      </button>

      <button
        type="button"
        className={status === 'Made' ? 'active' : ''}
        onClick={() => onChange('Made')}
      >
        Made
      </button>
    </div>
  )
}

export default StatusSelector
