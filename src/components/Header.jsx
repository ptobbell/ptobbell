import PropTypes from 'prop-types'


export default function Header({text, bgColor, textColor}) {


    const headerStyles = {backgroundColor:bgColor, color:textColor}

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
            
        </header>
    )






}


