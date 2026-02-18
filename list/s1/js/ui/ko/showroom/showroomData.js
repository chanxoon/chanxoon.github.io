// showroomData.js
const showroomData = {
    'sr1-house': {
        screen1: {
            // sr1-house
            title: '출동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '12s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게 진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '외부침입 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '2',
                            text: '문열림 감지',
                            subStepTimer: '6s',
                        },
                        {
                            number: '3',
                            text: '움직임 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '4',
                            text: '금고 감지기 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '5',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '8.5s',
                        },
                        {
                            number: '6',
                            text: '출동요원 출동',
                            subStepTimer: '6s',
                        },
                    ],
                },
            ],
        },
        screen2: {
            // sr1-house
            title: 'CCTV 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: 'CCTV가 왜 필요할까?',
                    stepTimer: '9s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: 'CCTV 기기의 종류는?',
                    stepTimer: '7s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '에스원의 특장점은?',
                    stepTimer: '3s',
                    subSteps: [],
                },
            ],
        },
    },
    'sr2-villa': {
        screen1: {
            // sr2-villa
            title: '촐동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게 진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '외부침입 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '2',
                            text: '문열림 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '3',
                            text: '비상 버튼 작동',
                            subStepTimer: '7s',
                        },
                        {
                            number: '4',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '9s',
                        },
                        {
                            number: '5',
                            text: '출동요원 출동',
                            subStepTimer: '5s',
                        },
                    ],
                },
            ],
        },
    },
    'sr3-store': {
        screen1: {
            // sr3-store
            title: '출동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게 진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '문열림 감지',
                            subStepTimer: '6.5s',
                        },
                        {
                            number: '2',
                            text: '움직임 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '3',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '8s',
                        },
                        {
                            number: '4',
                            text: '출동요원 출동',
                            subStepTimer: '5s',
                        },
                    ],
                },
            ],
        },
        screen2: {
            // sr3-store
            title: 'CCTV 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: 'CCTV가 왜 필요할까?',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: 'CCTV 기기의 종류는?',
                    stepTimer: '6s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '에스원의 특장점은?',
                    stepTimer: '3s',
                    subSteps: [],
                },
            ],
        },
        screen3: {
            // sr3-store
            title: '출입관리 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출입관리가 왜 필요할까?',
                    stepTimer: '6s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출입관리 기기의 종류는?',
                    stepTimer: '6s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '사용하는 방법은?',
                    stepTimer: '18s',
                    subSteps: [],
                },
            ],
        },
    },
    'sr4-office': {
        screen1: {
            // sr4-office
            title: '출동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '5.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게 진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '문열림 감지',
                            subStepTimer: '6.5s',
                        },
                        {
                            number: '2',
                            text: '움직임 감지',
                            subStepTimer: '6s',
                        },
                        {
                            number: '3',
                            text: '금고 감지기 감지',
                            subStepTimer: '6s',
                        },
                        {
                            number: '4',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '8s',
                        },
                        {
                            number: '5',
                            text: '출동요원 출동',
                            subStepTimer: '5s',
                        },
                    ],
                },
            ],
        },
        screen2: {
            // sr4-office
            title: 'CCTV 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: 'CCTV가 왜 필요할까?',
                    stepTimer: '6.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: 'CCTV 기기의 종류는?',
                    stepTimer: '8s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '에스원의 특장점은?',
                    stepTimer: '6s',
                    subSteps: [],
                },
            ],
        },
        screen3: {
            // sr4-office
            title: '출입/근태관리 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출입/근태관리가 왜<br />필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출입/근태관리 기기의<br />종류는?',
                    stepTimer: '9s',
                    subSteps: [
                        {
                            number: '1',
                            text: '외부',
                            subStepTimer: '7s',
                        },
                        {
                            number: '2',
                            text: '내부',
                            subStepTimer: '7s',
                        },
                    ],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '사용하는 방법은?',
                    stepTimer: '18s',
                    subSteps: [
                        {
                            number: '1',
                            text: '출입관리',
                            subStepTimer: '12s',
                        },
                        {
                            number: '2',
                            text: '근태관리',
                            subStepTimer: '13s',
                        },
                    ],
                },
            ],
        },
    },
    'sr5-factory': {
        screen1: {
            // sr5-factory
            title: '출동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게<br />진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '문열림 감지',
                            subStepTimer: '6s',
                        },
                        {
                            number: '2',
                            text: '움직임 감지',
                            subStepTimer: '8s',
                        },
                        {
                            number: '3',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '9s',
                        },
                        {
                            number: '4',
                            text: '출동요원 출동',
                            subStepTimer: '5s',
                        },
                    ],
                },
            ],
        },
        screen2: {
            // sr5-factory
            title: 'CCTV 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: 'CCTV가 왜 필요할까?',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: 'CCTV 기기의 종류는?',
                    stepTimer: '8s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '에스원의 특장점은?',
                    stepTimer: '3s',
                    subSteps: [],
                },
            ],
        },
        screen3: {
            // sr5-factory
            title: '출입/근태관리 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출입/근태관리가<br> 왜 필요할까?',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출입/근태관리 기기의<br> 종류는?',
                    stepTimer: '9s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '사용하는 방법은?',
                    stepTimer: '18s',
                    subSteps: [
                        {
                            number: '1',
                            text: '출입관리',
                            subStepTimer: '14s',
                        },
                        {
                            number: '2',
                            text: '근태관리',
                            subStepTimer: '18s',
                        },
                    ],
                },
            ],
        },
    },
    'sr6-storage': {
        screen1: {
            // sr6-storage
            title: '출동경비 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출동경비가 왜 필요할까?',
                    stepTimer: '7s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출동경비 서비스의 구성은?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '출동경비 서비스는 어떻게<br />진행될까?',
                    stepTimer: '3s',
                    subSteps: [
                        {
                            number: '1',
                            text: '문열림 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '2',
                            text: '움직임 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '3',
                            text: '외부침입 감지',
                            subStepTimer: '7s',
                        },
                        {
                            number: '4',
                            text: '이상신호 관제센터 전달',
                            subStepTimer: '8s',
                        },
                        {
                            number: '5',
                            text: '출동요원 출동',
                            subStepTimer: '5s',
                        },
                    ],
                },
            ],
        },
        screen2: {
            // sr6-storage
            title: 'CCTV 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: 'CCTV가 왜 필요할까?',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: 'CCTV 기기의 종류는?',
                    stepTimer: '6s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '에스원의 특장점은?',
                    stepTimer: '3s',
                    subSteps: [],
                },
            ],
        },
        screen3: {
            // sr6-storage
            title: '출입관리 서비스',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '출입관리가 왜 필요할까?',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '출입관리 기기의 종류는?',
                    stepTimer: '10s',
                    subSteps: [],
                    stopYn: 'Y',
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '사용하는 방법은?',
                    stepTimer: '20s',
                    subSteps: [],
                },
            ],
        },
    },
    'sr8-bluescan': {
        screen1: {
            // sr8-bluescan
            title: '누수 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '이상상황 사전 감지(누수)',
                    stepTimer: '5.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '10.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '관제센터 이중 모니터링',
                    stepTimer: '6s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 4',
                    titleCon: '고객 현장조치 및 대응 지원',
                    stepTimer: '11.5s',
                    subSteps: [],
                },
            ],
        },
        screen2: {
            // sr8-bluescan
            title: '가스 누출 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '이상상황 감지(가스)',
                    stepTimer: '8.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '12s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '관제센터 이중 모니터링',
                    stepTimer: '5.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 4',
                    titleCon: '고객 현장조치 및 대응 지원',
                    stepTimer: '10s',
                    subSteps: [],
                },
            ],
        },
        screen3: {
            // sr8-bluescan
            title: '화재 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '이상상황 감지(화재)',
                    stepTimer: '6.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '8.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '관제센터 이중 모니터링',
                    stepTimer: '10.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 4',
                    titleCon: '고객 현장조치 및 대응 지원',
                    stepTimer: '9.5s',
                    subSteps: [],
                },
            ],
        },
        screen4: {
            // sr8-bluescan
            title: '온도 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '이상상황 감지(온도)',
                    stepTimer: '5.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '12s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '고객 직접 제어',
                    stepTimer: '16s',
                    subSteps: [],
                },
            ],
        },
        screen5: {
            // sr8-bluescan
            title: '공기질 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '이상상황 감지(공기질)',
                    stepTimer: '6s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '10.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '관제센터 이중 모니터링',
                    stepTimer: '7.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 4',
                    titleCon: '고객 안내',
                    stepTimer: '9s',
                    subSteps: [],
                },
            ],
        },
        screen6: {
            // sr8-bluescan
            title: '정전 모니터링',
            steps: [
                {
                    titleNumber: 'STEP 1',
                    titleCon: '관제센터 이중 모니터링',
                    stepTimer: '5.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 2',
                    titleCon: '센서 알림 작동',
                    stepTimer: '10.5s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 3',
                    titleCon: '이상신호 관제센터 전달',
                    stepTimer: '8s',
                    subSteps: [],
                },
                {
                    titleNumber: 'STEP 4',
                    titleCon: '현장 대응 안내',
                    stepTimer: '8.5s',
                    subSteps: [],
                },
            ],
        },
    },
};
