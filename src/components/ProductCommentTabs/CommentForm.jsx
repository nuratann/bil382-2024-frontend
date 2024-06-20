import { Input, Button } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const CommentForm = ({reviewerId, productId,access_token, addComment}) => {

    // private Product productId;
    // private String reviewerId;//user_id
    // private String orderId;
    // private Integer grade;
    // private String options;
    // private String text;
    // private String images;

    const [comment, setComment] = useState('')  
    const handleComment = async () => {
        // const createReview = async (access_token) => {
        //     try {
        //         const dto = {productId:productId, text:comment,reviewerId:reviewerId,orderId:null,grade:4,options:null,images:null};
        //         const url = `http://localhost:8081/api/v1/reviews/`;
        //         const response = await fetch(url, {
        //             method: 'POST',
        //             headers: {
        //                 'Authorization': `Bearer ${access_token}`,
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(dto)
        //         });
        
        //         if (!response.ok) {
        //             throw new Error('failed to create comment')
        //         }
        //         return await response.json();
        //     } catch (error) {
        //         console.error('Error:', error);
        //         throw error;
        //     }
        // }
        if (comment !== '') {
            // await createReview(access_token)
            addComment({
                "id": "rev3",
                "userId": "user456",
                "orderId": "ord2",
                "type":"review",
                "grade": 4,
                "options": "{\"color\":\"Серый космос\",\"storage\":\"256GB\"}",
                "text": comment,
                "images": "[]",
                "reviewDate": "2024-05-31T9:00:00Z",
                "updatedDate": "2024-05-31T9:00:00Z",
                "likes": 0,
                "dislikes": 0,
                "comments": []
            })
        }
    
    }
    return (
        <div>
            <Input value={comment} onChange={(e) => setComment(e.target.value)}></Input>
            <Button onClick={()=>handleComment()} mt={4} mb={8} bg={"brand.blue"} color="white" _hover={{ bg: "brand.hoverblue" }}>Отправить</Button>
        </div>
    )
}

export default CommentForm