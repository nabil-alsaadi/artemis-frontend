import { useState } from 'react';
import { submitBlocks } from '../services/submissionService';

export const useSubmitBlocks = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validate = (selectedBlocks,allBlocks) => {
    if (selectedBlocks.length === 0) {
        alert('Please select at least one block.');
        return false; 
      }
  
      const singleSelected = selectedBlocks.some((id) => {
        const block = allBlocks.find((b) => b._id === id);
        return block && block.type === 'single';
      });
  
      const groupedSelected = selectedBlocks.some((id) => {
        const block = allBlocks.find((b) => b._id === id);
        return block && block.type === 'grouped';
      });

      if (singleSelected && groupedSelected) {
        alert('Invalid selection: You cannot select both single and grouped blocks.');
        return false; 
      }
  }
  const handleSubmit = async (selectedBlocks,allBlocks) => {
    validate(selectedBlocks,allBlocks)

    try {
      setLoading(true);
      setError(null);
      const response = await submitBlocks(selectedBlocks);
      alert(response.message || 'Submission successful!');
      return true; 
    } catch (err) {
      
      const msg = err.response.data.message
      setError(msg|| 'Failed to submit blocks');
      alert(msg || 'Failed to submit blocks');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleSubmit,
  };
};
