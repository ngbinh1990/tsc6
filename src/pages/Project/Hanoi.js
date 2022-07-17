import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';

import img01 from '../../assets/img/duan/IMAGE01.png';
import img02 from '../../assets/img/duan/IMAGE02.jpg';
import tintuc01 from '../../assets/img/tintuc/IMAGE01.png';

import './hanoi.css';
const Hanoi = () => {
	return (
		<>
			<Container>
				<Box className='hanoi'>
					<Grid container spacing={2}>
						<Grid item md={9}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								HÀ NỘI
							</Typography>
							<Grid container spacing={3}>
								<Grid item md={6}>
									<Card>
										<CardMedia
											component='img'
											height='310'
											image={img01}
											alt='green iguana'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												DIAMOND FLOWER
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Diamond Flower là tổ hợp với căn hộ cao cấp, văn phòng,
												nhà hàng, quán café với khuôn viên đẹp. Một lợi thế của
												căn hộ là phong cách kiến trúc đa dạng, nội thất hiện
												đại. Bên cạnh đó, Ngân hàng AGRIBA
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card>
										<CardMedia
											component='img'
											height='315'
											image={img02}
											alt='green iguana'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												GOLDEN PALM
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Golden Palm là tổ hợp với căn hộ cao cấp, văn phòng, nhà
												hàng. Bên cạnh đó, Ngân hàng BIDV – ngân hàng thương mại
												lớn đã đặt trụ sở chính tại The Golden Palm.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={3}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								TIN NỔI BẬT
							</Typography>
							<Card>
								<CardMedia
									component='img'
									height='160'
									image={tintuc01}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h6' component='div'>
										Hoạt động ủng hộ công tác phòng chống dịch COVID - 19 của
										công ty TSC6
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Hưởng ứng Lời kêu gọi của Đoàn Chủ tịch Ủy ban Trung ương
										MTTQ Việt Nam ngày 27/5/2021; Chương trình phát động của Uỷ
										ban MTTQ Việt Nam phường Nhân Chính và Ban quản trị nhà
										chung cư Diamond Flower.
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Hanoi;
