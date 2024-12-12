import { ToggleOption } from './types';

export const parseToggleOptions = (options: [ToggleOption, ToggleOption]) => {
    const labels = options.map(element => 
        typeof element === 'string' ? element : element.label
    );
    
    const values = options.map(element => 
        typeof element === 'string' ? element : element.value
    );

    return { labels, values };
};