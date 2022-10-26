import { useProductOptions } from '@shopify/hydrogen';

export default function ProductOptions() {
  const { options, selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <div className="grid gap-4 mb-6">
      {/* Look through each option */}
      {options.map(({ name, values }) => {
        {
          /* If there's only one option we don't need to show anything */
        }
        if (values.length === 1) {
          return null;
        }
        return (
          <div
            key={name}
            className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
          >
            <legend className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">
              {/* Display the option's name */}
              {name}
            </legend>

            <div className="flex flex-wrap items-baseline gap-4">
              {/* For each option value, display a radio button */}
              {values.map((value) => {
                const checked = selectedOptions[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className="sr-only"
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() => {
                        // When a option is selected, call setSelectedOption to update state
                        setSelectedOption(name, value);
                      }}
                    />
                    <div
                      className={`leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200 ${
                        checked ? 'border-gray-500' : 'border-neutral-50'
                      }`}
                    >
                      {value}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
