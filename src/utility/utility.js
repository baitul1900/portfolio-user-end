// for text shotcut

export let turncateText = (text, length) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    } else {
        return text;
    }
};

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date).toUpperCase();
};
  
