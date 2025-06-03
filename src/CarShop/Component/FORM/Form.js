import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    Avatar
} from '@mui/material';
import { Toast } from 'bootstrap';
import axios from 'axios';
import { API_URL } from '../../../config';
import { toast } from 'react-toastify';

export default function Form({ open, onClose, onSave, initialData }) {
    // initialData: đối tượng để edit, hoặc null để thêm mới

    const [formData, setFormData] = useState({
        hinhAnh: '',
        tenSP: '',
        loai: '',
        giaTien: '',
        mucdohienthi: '',
        id: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            // reset khi thêm mới
            setFormData({
                hinhAnh: '',
                tenSP: '',
                loai: '',
                giaTien: '',
                mucdohienthi: '',
                id: '',
            });
        }
    }, [initialData, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (buttonText) => {
        if (buttonText === 'Lưu') {
            onSave(formData);
        } else if (buttonText === 'Thêm') {
            try {
                console.log(formData);
                const response = await axios.post(`${API_URL}`, formData);
                toast.success("Thêm sản phẩm thành công");


            } catch (error) {
                console.error("Error for", error);
                toast.error("Thêm sản phẩm thất bại");

            }

        } else {
            Toast.error('Unknown action');
        }



    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{initialData ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm'}</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Image URL"
                        name="hinhAnh"
                        value={formData.hinhAnh}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Tên Sản Phẩm"
                        name="tenSP"
                        value={formData.tenSP}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Loại Sản Phẩm"
                        name="loai"
                        value={formData.loai}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Giá Tiền"
                        name="giaTien"
                        value={formData.giaTien}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                    <TextField
                        label="Mức độ hiển thị"
                        name="mucdohienthi"
                        value={formData.mucdohienthi}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Key"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        disabled={true}  // không cho sửa id khi edit
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={(e) => handleSubmit(e.currentTarget.textContent)}>{initialData ? 'Lưu' : 'Thêm'}</Button>
            </DialogActions>
        </Dialog>
    );
}
