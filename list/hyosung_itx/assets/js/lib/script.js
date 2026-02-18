$(document).ready(function () {
    const dataLeft = [
        {
            id: 1,
            parent_id: 0,
            title: '고객상담',
            level: 1,
        },
        {
            id: 2,
            parent_id: 1,
            title: '가입',
            level: 2,
        },
        {
            id: 3,
            parent_id: 1,
            title: '상담',
            level: 2,
        }
    ];

    const leftTreeId = '#left-tree';
    const leftSortable = new TreeSortable({
        treeSelector: leftTreeId,
    });
    const $leftTree = $(leftTreeId);
    const $content = dataLeft.map(leftSortable.createBranch);
    $leftTree.html($content);
    leftSortable.run();

    const delay = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    };

    leftSortable.onSortCompleted(async (event, ui) => {
        await delay();
        console.log('left tree', ui.item);
    });

    leftSortable.addListener('click', '.add-child', function (event, instance) {
        event.preventDefault();
        instance.addChildBranch($(event.target));
    });

    leftSortable.addListener('click', '.add-sibling', function (event, instance) {
        event.preventDefault();
        instance.addSiblingBranch($(event.target));
    });

    leftSortable.addListener('click', '.remove-branch', function (event, instance) {
        event.preventDefault();

        const confirm = window.confirm('삭제하시겠습니까?');
        if (!confirm) {
            return;
        }
        instance.removeBranch($(event.target));
    });
});
