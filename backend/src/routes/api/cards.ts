import { Router } from 'express';

const router = Router();

// Mock database
let cards: any[] = [];
let idCounter = 1;

// Get all cards
router.get('/', (req, res) => {
    res.json(cards);
});

// Get a single card by id
router.get('/:id', (req, res) => {
    const card = cards.find(c => c.id === parseInt(req.params.id));
    if (!card) return res.status(404).json({ message: 'Card not found' });
    res.json(card);
});

// Create a new card
router.post('/', (req, res) => {
    const { title, description, listId, position } = req.body;
    if (!title || !listId) {
        return res.status(400).json({ message: 'Title and listId are required' });
    }
    const newCard = {
        id: idCounter++,
        title,
        description: description || '',
        listId,
        position: position || 0,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    cards.push(newCard);
    res.status(201).json(newCard);
});

// Update a card
router.put('/:id', (req, res) => {
    const card = cards.find(c => c.id === parseInt(req.params.id));
    if (!card) return res.status(404).json({ message: 'Card not found' });

    const { title, description, listId, position } = req.body;
    if (title !== undefined) card.title = title;
    if (description !== undefined) card.description = description;
    if (listId !== undefined) card.listId = listId;
    if (position !== undefined) card.position = position;
    card.updatedAt = new Date();

    res.json(card);
});

// Delete a card
router.delete('/:id', (req, res) => {
    const index = cards.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Card not found' });
    cards.splice(index, 1);
    res.status(204).send();
});

export default router;