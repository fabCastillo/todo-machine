import { AiOutlineCheckSquare } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';

const iconTypes = {
    "check": color => (
        <AiOutlineCheckSquare className="Icon-svg Icon-svg--check" fill='gray'/>
    ),
    "delete": color => (
        <FiDelete className="Icon-svg Icon-svg--delete" fill='gray'/>
    )
}

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon};