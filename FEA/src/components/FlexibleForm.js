import React from "react";
import { useForm, Controller } from "react-hook-form";

/**
 * FlexibleForm
 * @param {Object[]} fields - Array of field configs: { name, label, type, options, layout }
 * @param {Function} onSubmit - Callback for form submit
 * @param {Object} [defaultValues] - Initial values
 * @param {Object} [layout] - Optional layout config (rows/columns)
 */
const FlexibleForm = ({ fields, onSubmit, defaultValues = {}, layout }) => {
  const { handleSubmit, control } = useForm({ defaultValues });

  // Simple grid layout, can be extended
  const getFieldStyle = (field) => {
    if (!layout) return { marginBottom: 16 };
    // Example: layout = { [fieldName]: { gridColumn: '1 / 3' } }
    return layout[field.name] || { marginBottom: 16 };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: 16 }}>
      {fields.map((field) => (
        <div key={field.name} style={getFieldStyle(field)}>
          <label style={{ display: 'block', marginBottom: 4 }}>{field.label}</label>
          <Controller
            name={field.name}
            control={control}
            render={({ field: rhfField }) => {
              switch (field.type) {
                case 'select':
                  return (
                    <select {...rhfField} style={{ width: '100%', padding: 8 }}>
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  );
                case 'textarea':
                  return <textarea {...rhfField} style={{ width: '100%', padding: 8 }} />;
                default:
                  return <input type={field.type} {...rhfField} style={{ width: '100%', padding: 8 }} />;
              }
            }}
          />
        </div>
      ))}
      <button type="submit" style={{ gridColumn: '1/-1', padding: 10, background: '#024b4d', color: '#fff', border: 'none', borderRadius: 4 }}>Submit</button>
    </form>
  );
};

export default FlexibleForm;
