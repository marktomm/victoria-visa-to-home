Schemas = {};

initForms = function()
{
  Schemas.FieldsExamples = new SimpleSchema({
        name: {
          type: String,
          label: i18n('form.name')
        },
        phone: {
          type: String,
          optional: true,
          label: i18n('form.phone')
        },
        address: {
          type: Object,
          label: i18n('form.address')
        },
        'address.street': {
          type: String,
          label: i18n('form.street')
        },
        'address.street2': {
          type: String,
          label: i18n('form.street2'),
          optional: true
        },
        'address.city': {
          type: String,
          label: i18n('form.city')
        },
        'address.state': {
          type: String,
          label: i18n('form.state'),
          allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
          autoform: {
            afFieldInput: {
              firstOption: "(Select a State)"
            }
          }
        },
        'address.postalCode': {
          type: String,
          label: i18n('form.zip')
        },
        contacts: {
          type: Array,
          label: i18n('form.contact'),
          optional: true
        },
        'contacts.$': {
          type: Object
        },
        'contacts.$.name': {
          type: String,
          label: i18n('form.name')
        },
        'contacts.$.phone': {
          type: String,
          label: i18n('form.phone')
        }
  });
  
  Template.registerHelper("Schemas", Schemas);
}