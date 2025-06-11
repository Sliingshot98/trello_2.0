import { Router, Request, Response } from 'express';

const router = Router();

// Mock database
let lists: any[] = [];
let listIdCounter = 1;

// Get all lists (optionally by boardId)
router.get('/', (req: Request, res: Response) => {
    const { boardId } = req.query;
    if (boardId) {
        return res.json(lists.filter(list => list.boardId === boardId));
    }
    res.json(lists);
});

// Get a single list by id
router.get('/:id', (req: Request, res: Response) => {
    const list = lists.find(l => l.id === Number(req.params.id));
    if (!list) return res.status(404).json({ error: 'List not found' });
    res.json(list);
});

// Create a new list
router.post('/', (req: Request, res: Response) => {
    const { name, boardId, position } = req.body;
    if (!name || !boardId) {
        return res.status(400).json({ error: 'Name and boardId are required' });
    }
    const newList = {
        id: listIdCounter++,
        name,
        boardId,
        position: position ?? lists.length,
        cards: []
    };
    lists.push(newList);
    res.status(201).json(newList);
});

// Update a list (e.g., rename, move)
router.put('/:id', (req: Request, res: Response) => {
    const list = lists.find(l => l.id === Number(req.params.id));
    if (!list) return res.status(404).json({ error: 'List not found' });

    const { name, position } = req.body;
    if (name !== undefined) list.name = name;
    if (position !== undefined) list.position = position;

    res.json(list);
});

// Delete a list
router.delete('/:id', (req: Request, res: Response) => {
    const idx = lists.findIndex(l => l.id === Number(req.params.id));
    if (idx === -1) return res.status(404).json({ error: 'List not found' });
    lists.splice(idx, 1);
    res.status(204).send();
});

export default router;