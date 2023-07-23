//Component 1 of the Car Haiku
const comp_one_arr = ['Roaring engine hums,', 'Sunset on the road,', 'Windows down, breeze weaves,', 
                  'Raindrops kiss the hood,','Gleaming chrome and steel,','Wheels turn, miles fly by,'];
//Component 2 of the Car Haiku
const comp_two_arr = ['Metal steed glides through the night,','Tires spin, asphalt whispers,', 'Open highway, endless dreams,',
                'Headlights cut through misty veil,', 'Silent guardian parked in dusk,','Passing landscapes like a dream,'];
//Component 3 of the Car Haiku
const comp_three_arr = ['Freedom\'s embrace calls.', 'Adventure awaits.', 'Carry me away.', 'Journey guided home.',
                  'Resting for the drive.', 'Carry memories.'];


const display_title = () => {
    console.log('------------------------------------');
    console.log('             CAR HAIKU              ');
    console.log('------------------------------------');
}

const get_random_num = num => {
    return Math.floor(Math.random() * num);
}

const get_messages = () => {
    const haiku_line_one = comp_one_arr[get_random_num(comp_one_arr.length)];
    const haiku_line_two = comp_two_arr[get_random_num(comp_two_arr.length)];
    const haiku_line_three = comp_three_arr[get_random_num(comp_three_arr.length)];

    const final_haiku = `${haiku_line_one}\n${haiku_line_two}\n${haiku_line_three}`;
    console.log(final_haiku);
}

display_title();
get_messages();