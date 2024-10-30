import Langui1 from '@public/langui-villa/bathroom.png'
import Langui2 from '@public/langui-villa/bedroom.png'
import Langui3 from '@public/langui-villa/comunal-area-aa.png'
import Langui4 from '@public/langui-villa/comunal-area-bb.png'
import Langui5 from '@public/langui-villa/kitchen.png'
import Langui6 from '@public/langui-villa/living-room.png'

// umah koe
import UmahKoe1 from '@public/umahkoe/bathroom.png';
import UmahKoe2 from '@public/umahkoe/bedroom.png';
import UmahKoe3 from '@public/umahkoe/kitchen-set.png';
import UmahKoe4 from '@public/umahkoe/kitchen.png';
import UmahKoe5 from '@public/umahkoe/living-room-2.png';
import UmahKoe6 from '@public/umahkoe/living-room.png';

// Ubud Villa
import Ubud1 from '@public/ubud-villa/bedroom.png';
import Ubud2 from '@public/ubud-villa/bedroom-2.png';
import Ubud3 from '@public/ubud-villa/bedroom-3.png';
import Ubud4 from '@public/ubud-villa/bathroom.png';

// DayCare
import DayCare1 from '@public/daycare/bedroom.png';
import DayCare2 from '@public/daycare/indoor-play-2.png';
import DayCare3 from '@public/daycare/indoor-play.png';
import DayCare4 from '@public/daycare/study-room.png';
import DayCare5 from '@public/daycare/waiting-room.png';

// Mandiri Villa

export const allGallery = [
    Langui1, Langui2, Langui3, Langui5, Langui6,
    UmahKoe1, UmahKoe2, UmahKoe3, UmahKoe4, UmahKoe5,
    Ubud1, Ubud2, Ubud3, Ubud4,
    DayCare1, DayCare2, DayCare3, DayCare4, DayCare5,
];

export const portfolioContent = [
    {
        title: 'Langui Villa',
        description: 'Description Langui Villa',
        images: [
            Langui1,
            Langui2,
            // Langui4, 
            Langui5,
            Langui6,
            Langui3,
        ]
    },
    {
        title: 'Umah Koe Yogya',
        description: 'Description Umah Koe Yogya',
        images: [
            UmahKoe1,
            UmahKoe2,
            UmahKoe3,
            UmahKoe4,
            UmahKoe5,
            // UmahKoe6
        ]
    },
    {
        title: 'Ubud Villa',
        description: 'Description Ubud Villa',
        images: [
            Ubud1,
            Ubud2,
            Ubud3,
            Ubud4,
        ]
    },
    {
        title: 'Day Care (College Final Project)',
        description: 'Description Day Care',
        images: [
            DayCare1,
            DayCare2,
            DayCare3,
            DayCare4,
            DayCare5
        ]
    }
]