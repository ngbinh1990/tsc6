import React from 'react';
import {
	Box,
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
} from '@mui/material';

import './serviceQLCC.css';

import tintuc01 from '../../assets/img/tintuc/IMAGE01.png';

import image04 from '../../assets/img/dichVu/IMAGE04.png';
import image05 from '../../assets/img/dichVu/IMAGE05.png';
import image06 from '../../assets/img/dichVu/IMAGE06.png';
import image07 from '../../assets/img/dichVu/IMAGE07.png';
import image08 from '../../assets/img/dichVu/IMAGE08.png';
import image09 from '../../assets/img/dichVu/IMAGE09.png';

const ServiceQLCC = () => {
	return (
		<>
			<Container>
				<Box className='quan-ly-chung-cu'>
					<Grid container spacing={4}>
						<Grid item md={9}>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
									fontSize: '1.3rem',
								}}>
								QUẢN LÝ CHUNG CƯ
							</Typography>
							<Typography>
								TSC6 cung cấp dịch vụ Quản Lý Vận Hành nhà chung cư đảm bảo cho
								cư dân ở đây có được môi trường sống đúng tiêu chuẩn, an toàn,
								tăng giá trị bất động sản của nhà chung cư.
							</Typography>
							<Grid container spacing={4} mt={1}>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image05}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												DỊCH VỤ KỸ THUẬT
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Quản lý vận hành hệ thống kỹ thuật: điện, nước, thang
												máy, điều hòa... và duy trì kiểm tra bảo trì thường
												xuyên giúp nó hoạt động được bình thường, an toàn nhất.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image04}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												DỊCH VỤ LỄ TÂN
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Chuyên nghiệp, luôn lịch sự, thân thiện và nhiệt tình
												giải đáp những thắc mắc hay từ tốn xử lý những phàn nàn
												của khách hàng
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image06}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												DỊCH VỤ AN NINH
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Dịch vụ an ninh tòa nhà đảm bảo sự an toàn, thoải mái
												cho cư dân, khách hàng sống tại tòa nhà, văn phòng
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image07}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												DỊCH VỤ VỆ SINH
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												Dịch vụ vệ sinh tòa nhà sẽ giữ cho dáng vẻ tòa nhà luôn
												sạch sẽ, luôn sáng bóng ... tạo môi trường sống thoải
												mái cho cư dân, thu hút được khách hàng, đối tác của tòa
												nhà.
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image08}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												CHĂM SÓC CÂY XANH
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={6}>
									<Card variant='none'>
										<CardMedia
											component='img'
											height='250'
											image={image09}
											alt='green iguana'
											sx={{
												margin: '10px',
												width: '85%',
												borderRadius: '10px',
											}}
										/>
										<CardContent>
											<Typography gutterBottom variant='h6' component='div'>
												KIỂM SOÁT CÔN TRÙNG
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
									fontSize: '1rem',
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

export default ServiceQLCC;
