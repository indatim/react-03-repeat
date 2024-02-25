const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <ul key={id}>
        <li>{name}:</li>
        <li>{number}</li>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </ul>
    ))}
  </>
);

export default ContactList;
