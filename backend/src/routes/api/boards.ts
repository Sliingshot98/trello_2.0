import { Router } from 'express';


const router = Router();

// Get all boards
router.get('/', async (req, res) => {
  
    res.json({ message: 'Get all boards' });
});

// Get a single board by ID
router.get('/:boardId', async (req, res) => {
    const { boardId } = req.params;
    res.json({ message: `Get board ${boardId}` });
});

// Create a new board
router.post('/', async (req, res) => {
    const { name, description } = req.body;
   
    res.status(201).json({ message: 'Board created', board: { name, description } });
});

// Update a board
router.put('/:boardId', async (req, res) => {
    const { boardId } = req.params;
    const { name, description } = req.body;
 
    res.json({ message: `Board ${boardId} updated`, board: { name, description } });
});

// Delete a board
router.delete('/:boardId', async (req, res) => {
    const { boardId } = req.params;
  
    res.json({ message: `Board ${boardId} deleted` });
});




export = router;