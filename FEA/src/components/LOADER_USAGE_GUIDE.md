/* 
LOADER COMPONENT USAGE EXAMPLES

After placing your loader.png image in the public folder, you can use the Loader component in various ways:

1. BASIC USAGE:
import Loader from "../components/Loader";

<Loader />
<Loader message="Loading movies..." />
<Loader size="large" message="Please wait..." />

2. SIZES AVAILABLE:
- small (32x32px)
- medium (48x48px) [default]
- large (64x64px)

3. WITH LOADING SPINNER WRAPPER:
import LoadingSpinner from "../components/LoadingSpinner";

<LoadingSpinner isLoading={status === 'loading'} message="Loading data...">
  <YourContent />
</LoadingSpinner>

// With overlay effect
<LoadingSpinner 
  isLoading={isSubmitting} 
  message="Saving..." 
  overlay={true}
  size="large"
>
  <YourForm />
</LoadingSpinner>

4. IN ASYNC OPERATIONS (like forms):
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    await submitForm();
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <LoadingSpinner isLoading={isSubmitting} message="Submitting form..." overlay>
    <form onSubmit={handleSubmit}>
      {/* form content }
    </form>
  </LoadingSpinner>
);

5. CONDITIONAL RENDERING:
{isLoading && <Loader size="large" message="Loading data..." />}
{!isLoading && <YourContent />}

6. WHERE TO PLACE loader.png:
- Option 1: public/loader.png (recommended) - component uses "/loader.png"
- Option 2: src/assets/loader.png - uncomment the require line in Loader.js

Remember to add your loader.png to the public folder for the current setup!
*/
