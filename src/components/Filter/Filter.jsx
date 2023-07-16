import PropTypes from "prop-types";
import { NotificationMessage } from "../NotificationMessage/NotificationMessage";

export const Filter = ({ contacts, filtered, onChangeFilter }) => {
    return contacts.length !== 0 ?
        (
            <label style={{ marginLeft: '30px' }}>
                Find contacts by name
                <input
                    type="text"
                    value={filtered}
                    onChange={onChangeFilter} />
            </label>
        ) :
        (
            <NotificationMessage />
        )
}

Filter.propTypes = {
  contacts: PropTypes.array.isRequired,
  filtered: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
